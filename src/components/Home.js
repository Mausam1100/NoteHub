import React, { useContext } from 'react'
import AddNote from './addNote'
import Modal from './Modal'
import NoteContext from '../context/notes/noteContext'

export default function Home() {
  const context = useContext(NoteContext)
  const {show } = context
  return (
    <div>
      {show && <Modal />}
      <AddNote />
    </div>
  )
}
