import { FC, memo } from 'react';
import { BrandsGithub } from '../ComponentIcon';
import AncorTag from './AncorTag';
import Row from './Row';
const Footer: FC = () => (
  <footer className="my-5 basis-full gap-y-4 border-t-8 border-solid border-blue-800 text-center text-lg text-white">
    <Row>
      Powered by&nbsp;
      <AncorTag href="" hover>
        Kartavya and parth
      </AncorTag>
    </Row>
  </footer>
);

export default memo(Footer);
