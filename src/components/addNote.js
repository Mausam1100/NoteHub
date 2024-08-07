import React, { useContext, useState, useEffect } from 'react'
import NoteContext from '../context/notes/noteContext'
import NoteItems from './NoteItems'

export default function AddNote() {
  const noteData = useContext(NoteContext)
  const {note, addNote, getNotes} = noteData

  const [newNote, setNewNote] = useState({"title": "", "description": "", "tag": "general"})

  const onChange = (event) => {
    setNewNote({...newNote, [event.target.name]: event.target.value})
  }

  const handleClick = (event) => {
    event.preventDefault()
    addNote(newNote.title, newNote.description, newNote.tag)
    // if (newNote.title !== "" || newNote.description !== "") {
    //     addNote(newNote.title, newNote.description, newNote.tag)
    // }
  }

  useEffect(() => {
    getNotes()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <div className='w-[65%] mx-auto max-w-[1000px] py-6'>
        <h2 className='text-2xl font-semibold'>Add Notes</h2>
        <div className='py-4 space-y-5'>
          <div className='space-y-2'>
            <label htmlFor="title" className='text-lg'>Title</label>
            <div className='w-full'>
              <input className='w-full border-[1px] border-slate-400 rounded h-9 px-3' onChange={onChange} name='title' type="text" id='title'/>
            </div>
          </div>
          <div className='space-y-2'>
            <label htmlFor="description" className='text-lg'>Description</label>
            <div className='w-full'>
              <input className='w-full border-[1px] border-slate-400 rounded h-9 px-3' onChange={onChange} name='description' type="text" id='description'/>
            </div>
          </div>
          <div className='space-y-2'>
            <label htmlFor="tag" className='text-lg'>Tag</label>
            <div className='w-full'>
              <input className='w-full border-[1px] border-slate-400 rounded h-9 px-3' onChange={onChange} name='tag' type="text" id='tag'/>
            </div>
          </div>
          <button className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 font-medium' onClick={handleClick}>Add Note</button>
        </div>
        <div className='py-5'>
          <h2 className='text-2xl font-semibold'>Your Notes</h2>
          <div className='flex flex-wrap gap-6 py-6'>
            {note.map((notess) => {
              return <NoteItems key={notess._id} note={notess}/>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
