import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation'

import styles from '@/styles/home.module.css'
export default function Home() {
  const [roomId, setRoomId] = useState('')
  const router = useRouter()
  const createAndJoin = () => {
    const roomId = uuidv4()
    router.push(`/${roomId}`)
  }
  const joinRoom = () => {
    if (roomId) router.push(`/${roomId}`)
    else {
      alert("Please provide a valid room id")
    }
  }
 /* useEffect(()=>{

socket?.on('connect',()=>{
  console.log(socket.id)
})

  },[socket])*/
  return (
<div className={styles.homeContainer}>
        <h1 >Google Meet Clone</h1>
        <div className={styles.enterRoom}>
          <input placeholder='Enter Room ID' value={roomId} onChange={(e) => setRoomId(e?.target?.value)} />
          <button onClick={joinRoom} >Join Room</button>
        </div>
        <span  className={styles.separatorText} >--------------- OR ---------------</span>
        <button onClick={createAndJoin}>Create a new room</button>
    </div>
  )
}
