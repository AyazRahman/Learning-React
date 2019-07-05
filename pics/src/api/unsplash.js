import axios from "axios";
//AccessKey: d5f6ec26a1ac82878a1661620ec7e16c4ac887706483cf96eab8e20e8dc0a526
//SecretKey: 0e192e02ed96d116c0db4541e2e73a30646ceb79fc6f19e184ee55f34e34d6ec
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID d5f6ec26a1ac82878a1661620ec7e16c4ac887706483cf96eab8e20e8dc0a526"
  }
});
