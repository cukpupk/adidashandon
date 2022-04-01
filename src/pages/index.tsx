import styles from './index.module.less'
import {reviews, totalResult} from '../mock/constant'
import React, {useEffect, useState, createElement} from "react";
import {rattingAndViewData} from "./index.interface";
import {Rating, Button, Select, MenuItem} from "@mui/material";
import {DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled} from '@ant-design/icons';
import Divider from "@mui/material/Divider";
import LinearProgress from "@mui/material/LinearProgress";
import './index.module.less'
const RattingViews = () => {
    const [data, setData] = useState<Array<rattingAndViewData>>([])
    const [totalResults, setTotalResults] = useState<number>(0)
    const like = (id: string) => {
        data.forEach(item => {
            if(item.id === id) {
                item.likes = 1
                item.dislikes = 0
                item.action = 'liked'
            }
        })
        setData([...data])
    }
    const dislike = (id: string) => {
        data.forEach(item => {
            if(item.id === id) {
                console.log(id)
                item.likes = 0
                item.dislikes = 1
                item.action = 'disliked'
            }
        })
        setData([...data])
    }
    useEffect(() => {
        setTotalResults(totalResult)
        reviews.forEach(item => {
            // @ts-ignore
            item.action = null
            // @ts-ignore
            item.likes = 0
            // @ts-ignore
            item.dislike = 0
        })
        // @ts-ignore
        setData([reviews[0], reviews[1], reviews[2]])
        // fetch('https://www.adidas.de/api/models/BTE67/reviews?includeLocales=en*&limit=10&offset=0&sort=newest').then(res => {
        //     // @ts-ignore
        //     setData(res?.reviews)
        // })
    }, [])
    const loadMoreData = () => {
        const currentLength = data.length
        let moreData = []
        if(currentLength < reviews.length - 3) {
            for(let i = currentLength; i<currentLength + 3; i++) {
                moreData.push(reviews[i])
            }
        }else {
            for(let i = currentLength; i<reviews.length; i++) {
                moreData.push(reviews[i])
            }
        }
        // @ts-ignore
        setData([...data.concat(moreData)])
    }
    const handleFilterChange = () => {

    }
    return (
        <div className={styles.rattingContainer}>
            <h5 className={styles.rattingContainerTitle}>
                RATINGS & REVIEWS
            </h5>
            <div className={styles.ratting}>
                <div className={styles.ratings}>
                    <div className={styles.rattingHeader}>
                        <div className={styles.rattingHeaderBody}>
                            <strong>{totalResults} Reviews</strong>
                        </div>
                    </div>
                    <div className={styles.starRating}>
                        <div className={styles.starRatingContainer}>
                            <Rating precision={0.1} defaultValue={4.6} readOnly={true}/>
                            <div className={styles.rattingContainerTitle}>4.6</div>
                        </div>
                    </div>
                    <div className={styles.subRating}>
                        <div className={styles.primarySubRatings}>
                            <div className={styles.primarySubRatingsLeft}>
                                <div className={styles.averageRating}>
                                    <Rating className={styles.starColor} max={1} defaultValue={1}/>
                                    <div className={styles.averageRatingNum}>4.0</div>
                                </div>
                                <div className={styles.ratingName}>
                                    <strong>comfort</strong>
                                </div>
                            </div>
                            <div className={styles.primarySubRatingsLeft}>
                                <div className={styles.averageRating}>
                                    <Rating className={styles.starColor} max={1} defaultValue={1} readOnly={true}/>
                                    <div className={styles.averageRatingNum}>4.4</div>
                                </div>
                                <div className={styles.ratingName}>
                                    <strong>quality</strong>
                                </div>
                            </div>
                        </div>
                        <Divider className={styles.divider} variant="middle"/>
                        <div className={styles.secondarySubRatings}>
                            <div className={styles.secondarySubRatingsSize}>
                                <div className={styles.comparisonBarTitle}>
                                    <strong className={styles.textStyle}>Size</strong>
                                </div>
                                <LinearProgress variant="determinate" value={50}/>
                                <div className={styles.comparisonBarLabel}>
                                    <label className={styles.comparisonBarLabels}>Zu klein</label>
                                    <label className={styles.comparisonBarLabels}>perfect</label>
                                    <label className={styles.comparisonBarLabels}>Zu groß</label>
                                </div>
                            </div>
                            <div className={styles.secondarySubRatingsSize}>
                                <div className={styles.comparisonBarTitle}>
                                    <strong className={styles.textStyle}>Width</strong>
                                </div>
                                <LinearProgress variant="determinate" value={50}/>
                                <div className={styles.comparisonBarLabel}>
                                    <label className={styles.comparisonBarLabels}>Zu schmal</label>
                                    <label className={styles.comparisonBarLabels}>perfect</label>
                                    <label className={styles.comparisonBarLabels}>Zu breit</label>
                                </div>
                            </div>

                        </div>
                    </div>
                    <Divider style={{marginTop: 15}} variant="middle"/>

                    <div className={styles.topicFilters}>
                        <div className={styles.topicFilter}>
                            <Button variant="outlined">Rating</Button>
                        </div>
                        <div className={styles.topicFilter}>
                            <Button variant="outlined">Quality</Button>
                        </div>
                        <div className={styles.topicFilter}>
                            <Button variant="outlined">Color</Button>
                        </div>
                        <div className={styles.topicFilter}>
                            <Button variant="outlined">Satisfaction</Button>
                        </div>
                        <div className={styles.topicFilter}>
                            <Button variant="outlined">Design</Button>
                        </div>
                        <div className={styles.topicFilter}>
                            <Button variant="outlined">Comfort</Button>
                        </div>
                    </div>


                </div>
                <div className={styles.reviews}>
                    <div className={styles.filterOptions}>
                        <div>Sort By</div>
                        <Select onChange={handleFilterChange} label="Sort By" variant="standard">
                            <MenuItem value={10}>Relevant</MenuItem>
                            <MenuItem value={20}>Newest</MenuItem>
                            <MenuItem value={30}>Helpful</MenuItem>
                            <MenuItem value={30}>Highest rated</MenuItem>
                            <MenuItem value={30}>Lowest rated</MenuItem>
                        </Select>
                    </div>

                    {data.map((item, index) => {
                        return (
                            <div className={styles.review} key={item.id}>
                                <div className={styles.reviewTitle}>
                                    <strong className={styles.title}>{item.title}</strong>
                                </div>
                                <div className={styles.stars}>
                                    <Rating className={styles.starColor} size="small" defaultValue={item.rating} precision={0.1} readOnly={true}/>
                                </div>
                                <div className={styles.content}>
                                    <div>{item.text}</div>
                                </div>
                                <div className={styles.voting}>
                                    <span style={{fontSize: 12}}>Helpful?</span>
                                    <div className={styles.likeBtn}>
                                        {item.likes > 0 ? <LikeFilled /> : <LikeOutlined onClick={() => like(item.id)}/>}
                                        <span>{item.likes}</span>
                                    </div>
                                    <div className={styles.likeBtn}>
                                        {item.dislikes > 0 ? <DislikeFilled /> : <DislikeOutlined onClick={() => dislike(item.id)}/>}
                                        <span>{item.dislikes}</span>
                                    </div>
                                </div>
                                <div className={styles.infoContainer}>

                                </div>
                            </div>
                        )
                    })}

                    <Button variant="text" onClick={() => loadMoreData()}>Show More</Button>
                </div>
            </div>

        </div>
    )
}
// @ts-ignore
export default RattingViews