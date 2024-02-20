const { Contract } = require("fabric-contract-api");
const crypto = require("crypto");

class AQIStore extends Contract {
  constructor() {
    super("AQIStore");
  }

  async instantiate() {
    // function that will be invoked on chaincode instantiation
  }
  
  async initLedger(ctx) {
    console.info('============= START : Initialize Ledger ===========');
    const industries = [
        {
            aqi_cat:"Good"
        },
        {
          aqi_cat:"Moderate"
        },
        {
          aqi_cat:"Poor"
        },
        {
          aqi_cat:"Very Poor"
        },
        {
          aqi_cat:"Moderate"
        },
    ];

    for (let i = 0; i < industries.length; i++) {
        industries[i].docType = 'industry';
        await ctx.stub.putState('IND' + i, Buffer.from(JSON.stringify(industries[i])));
        console.info('Added <--> ', industries[i]);
    }
    console.info('============= END : Initialize Ledger ===========');
}
 async enterData(ctx,IndustryId,aqi_cat) {
    const industry = {docType: 'industry', aqi_cat};
    await ctx.stub.putState(IndustryId, Buffer.from(JSON.stringify(industry)));

    return { success: "OK" };
  }

  async get(ctx, IndustryId) {
    const buffer = await ctx.stub.getState(IndustryId);
    if (!buffer || !buffer.length) return { error: "NOT_FOUND" };
    return { success: buffer.toString() };
  }

  async putPrivateMessage(ctx, collection) {
    const transient = ctx.stub.getTransient();
    const message = transient.get("message");
    await ctx.stub.putPrivateData(collection, "message", message);
    return { success: "OK" };
  }

  async getPrivateMessage(ctx, collection) {
    const message = await ctx.stub.getPrivateData(collection, "message");
    const messageString = message.toBuffer ? message.toBuffer().toString() : message.toString();
    return { success: messageString };
  }

  async verifyPrivateMessage(ctx, collection) {
    const transient = ctx.stub.getTransient();
    const message = transient.get("message");
    const messageString = message.toBuffer ? message.toBuffer().toString() : message.toString();
    const currentHash = crypto.createHash("sha256").update(messageString).digest("hex");
    const privateDataHash = (await ctx.stub.getPrivateDataHash(collection, "message")).toString("hex");
    if (privateDataHash !== currentHash) {
      return { error: "VERIFICATION_FAILED" };
    }
    return { success: "OK" };
  }
}

exports.contracts = [AQIStore];
