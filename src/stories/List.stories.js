import * as React from 'react'

export default {
  title:'List',
}

const elements = [
  '۱ عدد سیب',
  '۲ کیلو پیاز',
  'سه تا هویچ',
  'موادی خاص',
  'مقداری برنچ'
]

export const UnorganizedList = () =>(
  <ul>
    { elements.map((e,i) =>
      <li key={ i }>{ e }</li>
    ) }
  </ul>

)

export const OrganizedList = () =>(
  <ol>
    { elements.map((e,i) =>
      <li key={ i }>{ e }</li>
    ) }
  </ol>

)

export const Compact = () =>(
  <>
    <ul className='compact'>
      { elements.map((e,i) =>
        <li key={ i }>{ e }</li>
      ) }
    </ul>
    <ol className='compact'>
      { elements.map((e,i) =>
        <li key={ i }>{ e }</li>
      ) }
    </ol>
  </>

)
