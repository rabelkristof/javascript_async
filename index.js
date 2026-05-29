class Vendor {
  #itemList;

  #noItemCallback;

  #itemCallback;

  set noItemCallback(value) {
    this.#noItemCallback = value;
  }

  set itemCallback(value) {
    this.#itemCallback = value;
  }

  constructor(itemList) {
    this.#itemList = itemList;
  }

  sellSomething() {
    if (this.#itemList.length === 0) {
      this.#noItemCallback("nincs eladnivalo termek");
    } else {
      this.#itemCallback(this.#itemList.pop());
    }
  }

  sellSomethingPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.#itemList.length === 0) {
          reject("nincs eladnivalo termek");
        } else {
          resolve(this.#itemList.pop());
        }
      }, 1000);
    });
  }
}

class Client {
  #vendor;

  /**
   * @param {Vendor} vendor
   */
  constructor(vendor) {
    this.#vendor = vendor;
    this.#vendor.noItemCallback = (message) => {
      console.log(`A kliens nem vett semmit: ${message}`);
    };
    this.#vendor.itemCallback = (item) => {
      console.log(`A kliens ezt vette: ${item}`);
    };
  }

  buyFromSeller() {
    this.#vendor.sellSomething();
  }

  buyFromSellerPromise() {
    this.#vendor
      .sellSomethingPromise()
      .then((item) => {
        console.log(`A kliens ezt vette: ${item}`);
      })
      .catch((reason) => {
        console.log(`A kliens nem vett semmit: ${reason}`);
      })
      .finally(() => {
        console.log("vege van");
      });
  }
}

const vendor = new Vendor(["alma"]);
const client = new Client(vendor);
// client.buyFromSeller();
client.buyFromSellerPromise();
