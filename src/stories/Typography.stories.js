import * as React from 'react'
import { Meta, Typeset } from '@storybook/addon-docs/blocks'
import {
  FONT_FAMILY_PARAGRAPH,
  FONT_FAMILY_HEADINGS
} from './config'

export default {
  title:'Typography'
}

const paragraph_text = `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.`

export const HeadingTypeset = () => (
  <Typeset
    fontSizes={
      [
        '-3',
        '-2',
        '-1',
        0,
        1,
        2,
        3,
        4,
        5,
        6,
      ].map((e) => `calc(var(--s${e}) * 1rem)`)
    }
    fontWeight={'bold'}
    sampleText={'Voix ambiguë d\'un cœur qui, au zéphyr, préfère les jattes de kiwis'}
    fontFamily={ FONT_FAMILY_HEADINGS }
  />
)

export const ParagraphTypeset = () => (
  <Typeset
    fontSizes={
      [
        '-3',
        '-2',
        '-1',
        0,
        1,
        2,
        3,
        4,
        5,
        6,
      ].map((e) => `calc(var(--s${e}) * 1rem)`)
    }
    fontWeight={'bold'}
    sampleText={'Voix ambiguë d\'un cœur qui, au zéphyr, préfère les jattes de kiwis'}
    fontFamily={ FONT_FAMILY_PARAGRAPH }
  />
)

export const text_variables = () =>
  <>
    {
      ['tl', 'ti', 'ts', 'tsm', 'tb', 'tu', 'tv', 'tw', 'tos','to', 'tn'].map((e, i) =>
        <p
          className={e + ' x-primary c-x'}
          key={i}
        >
          { e }
          { ' : ' }
          { paragraph_text}
        </p>
      )
    }
  </>

text_variables.story = {
  name:'Text classes'
}

export const align = () =>
  <>
    {
      ['ul', 'ur', 'uc', 'uj', 'xs-ul uc', 'xs-uc ul', 'md-ur sm-uj'].map((e, i) =>
        <p
          className={e}
          key={i}
        >
          { e }
          { ' : ' }
          { paragraph_text}
        </p>
      )
    }
  </>

align.story = {
  name:'Paragraph alignment'
}
