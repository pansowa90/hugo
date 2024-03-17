import Page from './Page';

import Box from 'Component/box/Box';
import Text from 'Component/text/Text';

class HomePage extends Page {
  constructor() {
    super();
  }

  init() {
    super.init();

    Box.create();
    Text.create();
  }
}

HomePage.create();