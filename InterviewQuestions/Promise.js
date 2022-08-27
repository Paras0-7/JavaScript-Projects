const STATE = {
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
  PENDING: "pending",
};

class MyPromise {
  #thenCbs = [];
  #catchCbs = [];
  #state = STATE.PENDING;
  #value;
  #onSuccessBind = this.#onSuccess.bind(this);
  #onFailBind = this.#onFail.bind(this);
  constructor(executorFn) {
    try {
      executorFn(this.#onSuccessBind, this.#onFailBind);
    } catch (err) {
      this.#onFail(err);
    }
  }

  #runCallbacks() {
    if (this.#state === STATE.FULFILLED) {
      this.#thenCbs.forEach(function (callbackFn) {
        callbackFn(this.#value);
      });

      this.#thenCbs = [];
    }

    if (this.#state === STATE.REJECTED) {
      this.#catchCbs.forEach(function (callbackFn) {});
      callbackFn(this.#value);

      this.#catchCbs = [];
    }
  }
  #onSuccess(value) {
    if (this.#state !== STATE.PENDING) return;
    this.#value = value;
    this.#state = STATE.FULFILLED;
    this.#runCallbacks();
  }

  #onFail(value) {
    if (this.#state !== STATE.PENDING) return;

    this.#value = value;
    this.#state = STATE.REJECTED;
    this.#runCallbacks();
  }

  then(thenCb, catchCb) {
    return new MyPromise(function (resolve, reject) {
      if (thenCb != null) this.#thenCbs.push(thenCb);
      if (catchCb != null) this.#catchCbs.push(catchCb);
      this.#runCallbacks();
    });
  }

  catch(cb) {
    this.then(null, cb);
  }

  finally(cb) {}
}

const p = new MyPromise(cb);
