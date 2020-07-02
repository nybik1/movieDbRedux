import React from 'react';
import './About.css';

export default function about() {
    return (
        <div className="greeting">
            <h4 className='greeting__title'>Hello!</h4>
            <div className='greeting__text'> <p>This is my final projects in Beetroot Acadamy(sad to say it)</p>
                <p>In this app i try to learn react,redux, etc</p></div>
            <p>At this momment you can search movies, then you can go to <a href='https://www.themoviedb.org/?language=uk'>MovieDb site</a> and check movie info
            or you can click on Details and also see movie info</p>
        </div>
    )
}