import React from "react"

import Link from "../Link"

const SayHi = () => (
  <div className="text-4xl xs:text-5xl font-bold text-white max-w-345px leading-none mt-16 mb-8 lg:max-w-480px lg:my-16">
    Work inquiry, question or something else?{" "}
    <Link
      aria-label="Send an E-Mail to hello@rathes.me"
      className="underline"
      href="mailto:hello@rathes.me"
    >
      Say hi!
    </Link>
  </div>
)

export default SayHi
