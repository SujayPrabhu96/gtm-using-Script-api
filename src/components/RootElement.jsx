import React, { Fragment } from "react"
import { Script, ScriptStrategy } from "gatsby"

export const RootElement = ({ children }) => (
  <Fragment>
    <Script
      src="https://www.googletagmanager.com/gtm.js?id=GTM-5KL687P"
      strategy={ScriptStrategy.offMainThread}
      forward={["dataLayer.push"]}
    />
    <Script
      id="google-tagmanager"
      strategy={ScriptStrategy.offMainThread}
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5KL687P')`,
      }}
    />
    <div>{children}</div>
  </Fragment>
)
