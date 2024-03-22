import React from 'react'

function Dashboard() {
  const cardData = [
    {
      name: "primary card",
      color:"primary",
      text:"hi"
    },
    {
      name: "warning card",
      color:"warning",
      text:"hi"

    },
    {
      name: "danger card",
      color:"danger",
      text:"hi"
    },
    {
      name: "success card",
      color:"success",
      text:"hi"
    }
  ]
  return (
    <div className='container'>
      <div className='row'>
        {
          cardData.map((item) => {
            return <div className='col-3'>
              <div class={`card bg-${item.color}`}>
                <div class="card-header">
                  {item.name}
                </div>
                <div class="card-body">
                  {item.text}
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Dashboard