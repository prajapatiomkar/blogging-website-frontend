import React from 'react'

export default function Post() {
    return (
        <div className="post">
            <div className="image">
                <img src="https://techcrunch.com/wp-content/uploads/2023/01/artemis-i-sls-launch.jpg?w=1390&crop=1" alt="" />
            </div>
            <div className='texts'>
                <h2>NASA’s ‘Mega Moon Rocket’ aced first </h2>
                <p className="info">
                    <a className="author">Prajapati omkar</a>
                    <time>2023-01-06 16:35 </time>
                </p>
                <p className="summary">The enormous Space Launch System passed its first test with flying colors, NASA’s preliminary analysis concludes</p>
            </div>
        </div>

    )
}
