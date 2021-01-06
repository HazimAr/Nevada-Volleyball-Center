interface data {
    basic: string,
    standard: string,
    premium: string
}
const theDataBitch: data[] = [
    {
        basic: '$60/hr',
        standard: '$55/hr',
        premium: '$50/hr'

    }

]
function Rows(props: { data: data[] }): any {
    let out: any = []
    for (let i = 0; i < props.data.length; i++) {
        out.push(
            <tr>
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
                <title> im a title</title>
                <thead>
                    <tr id='tbheader'>
                        <th>less then 6 months</th>
                        <th>6-12 months</th>
                        <th>12+ months</th>
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

