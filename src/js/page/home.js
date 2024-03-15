import Component from '../component/Component';
import Box from '../component/box/Box';
import Text from '../component/text/Text';

class Page extends Component {
  constructor() {
    super();
  }

  init() {
    Box.create({
      className: ".box"
    });

    Text.create();
  }
}

Page.create();