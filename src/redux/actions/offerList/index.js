import axios from "axios";

const apiUrl = "http://cdn.sixt.io/codingtask/offers.json"

export const getOfferList = async () => axios.get(apiUrl)
