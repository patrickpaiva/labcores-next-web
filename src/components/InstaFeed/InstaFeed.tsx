import axios from 'axios'
import { useEffect, useState } from 'react'
import { Container } from './styles'
import { InstagramEmbed } from 'react-social-media-embed'

interface IFeedItem {
  id: string
  media_type: 'IMAGE' | 'VIDEO'
  media_url: string
  permalink: string
}

export function InstaFeed() {
  const [feedList, setFeedList] = useState<IFeedItem[]>([])

  async function getInstaFeed() {
    const token = process.env.NEXT_PUBLIC_INSTA_FEED_TOKEN
    const fields = 'media_url,media_type,permalink'
    const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`

    const { data } = await axios.get(url)
    setFeedList(data.data.slice(0, 4))
  }

  useEffect(() => {
    getInstaFeed()
  }, [])

  return (
    <Container>
      {feedList.map(item => (
        <InstagramEmbed key={item.id} url={item.permalink} width={326} />
      ))}
    </Container>
  )
}
