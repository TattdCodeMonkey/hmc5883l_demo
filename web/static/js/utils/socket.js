import {Socket} from "../../../../deps/phoenix/web/static/js/phoenix"
import { receiveHeading } from "../actions";

export function initCompassSocket(store, action) {
  let socket = new Socket("/socket");

  socket.connect({token: window.userToken})

  // Now that you are connected, you can join channels with a topic:
  let channel = socket.channel("compass:data", {})
  channel.join()
    .receive("ok", resp => { console.log("Joined succesffuly", JSON.stringify(resp)) })
    .receive("error", resp => { console.error("Unabled to join", resp) })

  channel.on("heading", function (payload) {
    store.dispatch(receiveHeading(payload));
  });
};
