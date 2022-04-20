import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { v4 as uuidv4 } from 'uuid'

import './style.scss'

// litere random
const randomArr = [
  'V',
  'T',
  'L',
  'X',
  'F',
  'T',
  'X',
  'L',
  'E',
  'D',
  'V',
  'N',
  'O',
]

// numerele de la 1 la 12
const auxiliaryNumbers = [9, 1, 6, 3, 4, 5, 2, 8, 11, 7, 12, 10]
const numbers = [
  ['N', 'I', 'N', 'E'],
  ['O', 'N', 'E'],
  ['S', 'I', 'X'],
  ['T', 'H', 'R', 'E', 'E'],
  ['F', 'O', 'U', 'R'],
  ['F', 'I', 'V', 'E'],
  ['T', 'W', 'O'],
  ['E', 'I', 'G', 'H', 'T'],
  ['E', 'L', 'E', 'V', 'E', 'N'],
  ['S', 'E', 'V', 'E', 'N'],
  ['T', 'W', 'E', 'L', 'V', 'E'],
  ['T', 'E', 'N'],
]

// celelalte componente
const itIs = [
  ['I', 'T'],
  ['I', 'S'],
]
const twenty = ['T', 'W', 'E', 'N', 'T', 'Y']
const quarter = ['A', ['Q', 'U', 'A', 'R', 'T', 'E', 'R']]
const half = ['H', 'A', 'L', 'F']
const past = ['P', 'A', 'S', 'T']
const to = ['T', 'O']
const clk = ['O', '`', 'C', 'L', 'O', 'C', 'K']
const period = [
  ['A', 'M'],
  ['P', 'M'],
]

// ceasul
const Watch = () => {
  const [hours, setHours] = useState(new Date().getHours())
  const [minutes, setMinutes] = useState(new Date().getMinutes())

  useEffect(() => {
    const interval = setInterval(() => {
      setHours(new Date().getHours())
      setMinutes(new Date().getMinutes())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <section className='watch-container'>
        {/* IT */}
        {itIs[0].map((item) => {
          return (
            <div
              style={{ color: 'white', fontWeight: 'bold' }}
              key={uuidv4()}
              className='item'
            >
              {item}
            </div>
          )
        })}

        {/* Litera random */}
        <div className='item'>
          {randomArr[Math.floor(Math.random() * randomArr.length)]}
        </div>

        {/* IS */}
        {itIs[1].map((item) => {
          return (
            <div
              style={{ color: 'white', fontWeight: 'bold' }}
              key={uuidv4()}
              className='item'
            >
              {item}
            </div>
          )
        })}

        {/* 6 litere random */}
        {randomArr.map((item, index) => {
          if (index < 6) {
            return (
              <div key={uuidv4()} className='item'>
                {item}
              </div>
            )
          }
          return null
        })}

        {/* 'A' de la quarter */}
        <div
          style={
            (minutes >= 15 && minutes < 20) || (minutes >= 45 && minutes < 50)
              ? { color: 'white', fontWeight: 'bold' }
              : { color: 'gray' }
          }
          className='item'
        >
          {quarter[0]}
        </div>

        {/* Litera random */}
        <div className='item'>
          {randomArr[Math.floor(Math.random() * randomArr.length)]}
        </div>

        {/* QUARTER */}
        {quarter[1].map((item) => {
          return (
            <div
              style={
                (minutes >= 15 && minutes < 20) ||
                (minutes >= 45 && minutes < 50)
                  ? { color: 'white', fontWeight: 'bold' }
                  : { color: 'gray' }
              }
              key={uuidv4()}
              className='item'
            >
              {item}
            </div>
          )
        })}

        {/* 2 litere random */}
        <div className='item'>
          {randomArr[Math.floor(Math.random() * randomArr.length)]}
        </div>
        <div className='item'>
          {randomArr[Math.floor(Math.random() * randomArr.length)]}
        </div>

        {/* TWENTY */}
        {twenty.map((item) => {
          return (
            <div
              style={
                (minutes >= 20 && minutes < 30) ||
                (minutes >= 35 && minutes < 45)
                  ? { color: 'white', fontWeight: 'bold' }
                  : { color: 'gray' }
              }
              key={uuidv4()}
              className='item'
            >
              {item}
            </div>
          )
        })}

        {/* FIVE (pentru exprimarea minutelor) */}
        {numbers[5].map((item) => {
          // five e numbers[5]
          return (
            <div
              style={
                (minutes >= 5 && minutes < 10) ||
                (minutes >= 55 && minutes < 60) ||
                (minutes >= 25 && minutes < 30) ||
                (minutes >= 35 && minutes < 40)
                  ? { color: 'white', fontWeight: 'bold' }
                  : { color: 'gray' }
              }
              key={uuidv4()}
              className='item'
            >
              {item}
            </div>
          )
        })}

        {/* Litera random */}
        <div className='item'>
          {randomArr[Math.floor(Math.random() * randomArr.length)]}
        </div>

        {/* HALF */}
        {half.map((item) => {
          return (
            <div
              style={
                minutes >= 30 && minutes < 35
                  ? { color: 'white', fontWeight: 'bold' }
                  : { color: 'gray' }
              }
              key={uuidv4()}
              className='item'
            >
              {item}
            </div>
          )
        })}

        {/* Litera random */}
        <div className='item'>
          {randomArr[Math.floor(Math.random() * randomArr.length)]}
        </div>

        {/* ten (pentru exprimarea minutului) */}
        {numbers[numbers.length - 1].map((item) => {
          // ten e numbers[numbers.length - 1]
          return (
            <div
              style={
                (minutes >= 10 && minutes < 15) ||
                (minutes >= 50 && minutes < 55)
                  ? { color: 'white', fontWeight: 'bold' }
                  : { color: 'gray' }
              }
              key={uuidv4()}
              className='item'
            >
              {item}
            </div>
          )
        })}

        {/* Litera random */}
        <div className='item'>
          {randomArr[Math.floor(Math.random() * randomArr.length)]}
        </div>

        {/* TO */}
        {to.map((item) => {
          return (
            <div
              style={
                minutes >= 35
                  ? { color: 'white', fontWeight: 'bold' }
                  : { color: 'gray' }
              }
              key={uuidv4()}
              className='item'
            >
              {item}
            </div>
          )
        })}

        {/* PAST */}
        {past.map((item) => {
          return (
            <div
              style={
                minutes < 35 && minutes >= 5
                  ? { color: 'white', fontWeight: 'bold' }
                  : { color: 'gray' }
              }
              key={uuidv4()}
              className='item'
            >
              {item}
            </div>
          )
        })}

        {/* 3 litere random */}
        {randomArr.map((item, index) => {
          if (index < 3) {
            return (
              <div key={uuidv4()} className='item'>
                {item}
              </div>
            )
          }
          return null
        })}

        {/* Numerele de la 1 la 12 */}
        {numbers.map((item, index) => {
          return item.map((item2) => {
            return (
              <div
                style={
                  (minutes < 35 &&
                    (hours === auxiliaryNumbers[index] ||
                      hours - 12 === auxiliaryNumbers[index] ||
                      hours + 12 === auxiliaryNumbers[index])) ||
                  (minutes >= 35 &&
                    (hours + 1 === auxiliaryNumbers[index] ||
                      hours - 12 + 1 === auxiliaryNumbers[index]))
                    ? {
                        color: 'white',
                        fontWeight: 'bold',
                      }
                    : { color: 'gray' }
                }
                className='item'
                key={uuidv4()}
              >
                {item2}
              </div>
            )
          })
        })}

        {/* Litera random */}
        <div className='item'>
          {randomArr[Math.floor(Math.random() * randomArr.length)]}
        </div>

        {/* O`CLOCK */}
        {clk.map((item) => {
          return (
            <div
              style={
                minutes > 55 || minutes < 5
                  ? { color: 'white', fontWeight: 'bold' }
                  : { color: 'gray' }
              }
              className='item'
              key={uuidv4()}
            >
              {item}
            </div>
          )
        })}

        {/* AM */}
        {period[0].map((item) => {
          return (
            <div
              style={
                hours < 12
                  ? { color: '#BB86FC', fontWeight: 'normal' }
                  : { color: 'gray' }
              }
              className='item'
              key={uuidv4()}
            >
              {item}
            </div>
          )
        })}

        {/* 7 litere random */}
        {randomArr.map((item, index) => {
          if (index > 5) {
            return (
              <div className='item' key={uuidv4()}>
                {item}
              </div>
            )
          }
          return null
        })}

        {/* PM */}
        {period[1].map((item) => {
          return (
            <div
              style={
                hours >= 12
                  ? { color: '#03DAC5', fontWeight: 'normal' }
                  : { color: 'gray' }
              }
              className='item'
              key={uuidv4()}
            >
              {item}
            </div>
          )
        })}
      </section>
      <footer
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '10px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div className='madeby' style={{ color: 'white' }}>
          Made by Iza
        </div>
        <div
          className='icons'
          style={{
            color: 'white',
            display: 'flex',
          }}
        >
          <a href='https://github.com/izabelamaria24'>
            <i className='fab fa-github'></i>
          </a>
          <a href='https://www.instagram.com/izabela.maria24/'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='https://www.facebook.com/izabela.jilavu/'>
            <i className='fab fa-facebook'></i>
          </a>
        </div>
      </footer>
    </>
  )
}

ReactDOM.render(<Watch />, document.getElementById('root'))
