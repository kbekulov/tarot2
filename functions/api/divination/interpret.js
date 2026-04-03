import {
  handleInterpretOptions,
  handleInterpretPost
} from "../../../cloudflare/divination-ai-handler.js";

export function onRequestOptions(context) {
  return handleInterpretOptions(context);
}

export function onRequestPost(context) {
  return handleInterpretPost(context);
}
