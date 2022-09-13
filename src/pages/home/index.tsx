import React from 'react'
import Layout from '../../components/Layout';
import { Button } from 'antd';
import './index.less'

function Home() {
  return (
    <div>
      <Layout>
        <div className='pagew'>Home
          <div>
            <Button type="primary">按钮1</Button>
          </div>
          <div className='box'>
            简单样式
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home