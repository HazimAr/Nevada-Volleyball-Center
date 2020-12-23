import img from '../Images/down.svg'
import wave from '../Images/wave.svg'
import quote from '../Images/trendingUp.svg'

function Section(props: { img: any, title: string, text: string }) {
    return (
        <div className='section'>
            <img src={props.img} alt='' />
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}

function Quote(props: { quote: string, name: string, org: string, img: any }) {
    return (
        <div className='quote-div'>
            <div className='quote'>
                <img src={quote} alt='' />
                <p>{props.quote}</p>
            </div>
            <div className='quote-info'>
                <img src={props.img} alt='' />
                <div>
                    <h4>{props.name}</h4>
                    <p>{props.org}</p>
                </div>
            </div>
        </div>

    )
}

export default function Home() {
    return (
        <div>
            <div>
                <div className='main-div'>

                </div>
                <img src={wave} alt='' />
            </div>
            <div className='mid'>
                <div id='first'>
                    <h1>Lorem Ipsum Lorem Ipsum</h1>
                    <p>
                        Delivering high quality application compatibility and transformation services to the world’s largest businesses since 2003
                    </p>
                </div>
                <div className='sections-div'>
                    <Section img={img} title="Title" text="Delivering high quality application compatibility and transformation services to the world’s largest businesses since 2003" />
                    <Section img={img} title="Title" text="Delivering high quality application compatibility and transformation services to the world’s largest businesses since 2003" />
                    <Section img={img} title="Title" text="Delivering high quality application compatibility and transformation services to the world’s largest businesses since 2003" />
                </div>
                <a href="/somewhere" className='button'>Learn more</a>
                <div className='test-div'>
                    <Quote
                        quote="Proudly cooperating with hundreds of the world's top companies"
                        name='Hazim The Fourth'
                        org="None, he lonely"
                        img={img}
                    />
                    <Quote
                        quote="Proudly cooperating with hundreds of the world's top companies"
                        name='Hazim The Fourth'
                        org="None, he lonely"
                        img={img}
                    />
                    <Quote
                        quote="Proudly cooperating with hundreds of the world's top companies"
                        name='Hazim The Fourth'
                        org="None, he lonely"
                        img={img}
                    />

                </div>
            </div>
        </div>
    )
}