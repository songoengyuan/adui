import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import Table from '..'


describe("Table", () => {
  it("快照核对", () => {
    const wrapper = TestRenderer.create(<Table dataSource={[
      {
        "one": "阿萨德",
        "two": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
        "four": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
        "three": "阿萨德阿萨德阿萨德阿萨德阿萨德",
      },
      {
        "one": "阿萨德",
        "two": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
        "four": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
        "three": "阿萨德阿萨德阿萨德阿萨德阿萨德",
      },
      {
        "one": "阿萨德",
        "two": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
        "four": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
        "three": "阿萨德阿萨德阿萨德阿萨德阿萨德",
      },
      {
        "one": "阿萨德",
        "two": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
        "four": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
        "three": "阿萨德阿萨德阿萨德阿萨德阿萨德",
      },
      {
        "one": "阿萨德",
        "two": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
        "four": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
        "three": "阿萨德阿萨德阿萨德阿萨德阿萨德",
      },
    ]} />)
    expect(wrapper).toMatchSnapshot()
  })
})