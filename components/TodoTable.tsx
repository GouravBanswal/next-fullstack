"use client"
import React, { useState } from 'react'
import {useEffect} from 'react'
type TODO = {
    _id?: string,
    task: string,
    desc: string,
    createdAt?: string,
    updatedAt?: string,
    __v?: string
}
const TodoTable =  () => {
    const [allTodos, setAllTodos] = useState<TODO[]>([])
    const getTodos = async() => {
        const res = await fetch("/api/todo",{
            method: "GET",
            headers: {
                "content-Type": "application/json"
            }
        })
        const {result} = await res.json()
        console.log(result)
        setAllTodos(result)
        
    }
    useEffect(() => {
      getTodos()
    }, [])
    const handleDelete = async() => {
    
    }
  return <>
    {
        allTodos.map(item => <div className='flex gap-5'>
            <h1>{item.task}</h1>
            <button onClick={handleDelete}>Delete</button>
        </div>)
    }
  </>
}

export default TodoTable