import React from 'react'
import { Message } from 'semantic-ui-react'

const Informations = () => (
  <Message warning>
    <Message.Header>お知らせ</Message.Header>
    <Message.List>
      <Message.Item>1週間で3kg以上の体重変化がありました</Message.Item>
      <Message.Item>定期検診のお知らせ</Message.Item>
    </Message.List>
  </Message>
)

export default Informations;
