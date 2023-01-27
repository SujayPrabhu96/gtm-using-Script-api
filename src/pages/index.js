import React from "react"

const onClickHandler = () => {
  window.dataLayer.push({
    event: "select_item",
    ecommerce: {
      item_list_id: "rooms_listing",
      item_list_name: "Rooms Listing",
    },
  })
}

const Page = () => {
  return (
    <>
      <h1>Index Page</h1>
      <button onClick={onClickHandler}>Click here</button>
    </>
  )
}

export default Page
