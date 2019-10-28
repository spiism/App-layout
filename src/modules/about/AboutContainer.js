// @flow
import React, {Component} from 'react'

import AboutView from './AboutView'

type Props = {
  navigation: any
}

class AboutContainer extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      state1: undefined
    }
  }

  onButtonPress = () => {
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <AboutView
        {...this.props}
        {...this.state}
        onButtonPress={this.onButtonPress}
      />
    )
  }
}

export default AboutContainer