import React from 'react';
import "./Detail.css"
import { useParams } from 'react-router-dom';
import { articles } from './mock';

function Detail() {
    const { id } = useParams();
    const article = articles.at(Number(id));

    return (
        <div className='detail-background'>
            <div className='detail-page'>
                <div className='detail-buttons'>
                    <div>
                        <button><i className="fa-solid fa-thumbs-up"></i></button>
                        <span>{article?.likes}赞</span>
                    </div>
                    <div>
                        <button>赏</button>
                        <span>赞赏</span>
                    </div>
                    <div>
                        <button><i className="fa-solid fa-qrcode"></i></button>
                        <span>更多好文</span>
                    </div>
                </div>
                <div className='detail-main'>
                    <h1>{article?.title}</h1>
                    <div className='detail-author'>
                        <img src={article?.author_thumbnail} alt='thumbnail'/>
                        <div>
                            <div className='row1'>
                                <span className='row1-author'>{article?.author}</span>
                                <img src="https://upload.jianshu.io/user_badge/10dea104-404d-433d-8e7e-28cc8420e919" alt=""/>
                                <button>关注</button>
                                <span className='row1-ip'>IP属地：{article?.ip_location}</span>
                            </div>
                            <div className='row2'>
                                <span className='diamond'><i className="fa-regular fa-gem"></i>{" " + article?.diamond + " "}</span>
                                <span>{article?.last_update}</span>
                                <span>字数 {article?.word_count}</span>
                                <span>阅读 {article?.read_amount}</span>
                            </div>
                        </div>
                    </div>
                    <article>
                        {article?.paragraphs.map(paragraph => (
                            <p>{paragraph}</p>
                        ))}
                    </article>
                </div>
                <aside className='detail-aside'>
                    <section>
                        <h3>热门故事</h3>
                        <div>当初一起创业，却给别人做了嫁衣</div>
                        <div>你看过最恐怖的悬疑小说是那部</div>
                        <div>丧心病狂的瓦全</div>
                        <div>我和美铝被困凶宅</div>
                        <div>或者就是坚强</div>
                    </section>
                </aside>
            </div>
        </div>
    );
}

export default Detail;