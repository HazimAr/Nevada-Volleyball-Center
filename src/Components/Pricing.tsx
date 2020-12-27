interface data {
    title: string,
    basic: string,
    standard: string,
    premium: string
}
const theDataBitch: data[] = [
    {
        title: "The exponent of gay is approximate",
        basic: '...',
        standard: 'Hazimos',
        premium: 'thal;kdfj'
    },
    {
        title: "The exponent of gay is approximate",
        basic: '...',
        standard: 'Hazimos',
        premium: 'thal;kdfj'

    },
    {
        title: "The exponent of gay is approximate",
        basic: '...',
        standard: 'Hazimos',
        premium: 'thal;kdfj'

    },
    {
        title: "The exponent of gay is approximate",
        basic: '...',
        standard: 'Hazimos',
        premium: 'thal;kdfj'
    }

]
function Rows(props: { data: data[] }): any {
    let out: any = []
    for (let i = 0; i < props.data.length; i++) {
        out.push(
            <tr>
                <th>{props.data[i].title}</th>
                <td>{props.data[i].basic}</td>
                <td>{props.data[i].standard}</td>
                <td>{props.data[i].premium}</td>
            </tr>
        )
    }
    return out
}

export default function Pricing() {
    return (
        <div className='about'>
            <h1>About Hazimos</h1>
            <p>Wild Species driven to extinction throught inability to mate.</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae architecto vitae, quibusdam quisquam commodi a repudiandae rerum provident eos facere numquam! Error nam possimus in dicta tempore? Exercitationem, ullam praesentium.</p>

            <table className='price-table'>
                <thead>
                    <tr id='tbheader'>
                        <th></th>
                        <th>1 Hour</th>
                        <th>2 Hours</th>
                        <th>3 Hours</th>
                    </tr>
                </thead>
                <tbody>
                    <Rows data={theDataBitch} />
                </tbody>
            </table>

            <h1>More About Something</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate suscipit, in mollitia voluptate ducimus itaque ratione. Natus culpa tempora beatae autem, quaerat saepe suscipit voluptate sed inventore minima molestias pariatur.</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate suscipit, in mollitia voluptate ducimus itaque ratione. Natus culpa tempora beatae autem, quaerat saepe suscipit voluptate sed inventore minima molestias pariatur.</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate suscipit, in mollitia voluptate ducimus itaque ratione. Natus culpa tempora beatae autem, quaerat saepe suscipit voluptate sed inventore minima molestias pariatur.</p>

        </div>
    )
}

