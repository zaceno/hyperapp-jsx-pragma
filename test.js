import { h, text } from "hyperapp"
import { t, deepEqual } from "twist"
import jsx from "./index.js"

export default [
  t("hyperapp", [
    t("simple jsx calls map to simple h calls", [
      deepEqual(
        h("zord", { foo: true }, []),
        jsx("zord", { foo: true }, [])
      ),
    ]),
    t("strings become text nodes", [
      deepEqual(
	    h("p", {}, text("tenet")),
		jsx("p", {}, "tenet")
	  ),
    ]),
    t("numbers become text nodes", [
      deepEqual(
	    h("p", {}, text(42)),
		jsx("p", {}, 42)
	  ),
    ]),
  ]),
]
