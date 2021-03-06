import React, { Component } from 'react'
import { Paragraph } from 'grommet'

interface Props {
    cost: string
}

export default class Dhl extends Component<Props> {

    render() {
        const moment = require('moment')
        const deliveryTime = moment().add(1, 'days').calendar() 

        return (
            <div>
                <Paragraph>Your items will be delivered: {' ' + deliveryTime}</Paragraph>
                <Paragraph>{this.props.cost}</Paragraph>
            </div>
        )
    }
}
