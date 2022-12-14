import {
  –°ontainerAdditional,
  TitleAdditional,
  ListAdditional,
  Item,
} from './Additional.styled';

const Additional = ({ backLinkHref }) => {
  return (
    <–°ontainerAdditional>
      <TitleAdditional>Additional information</TitleAdditional>
      <ListAdditional>
        <li>
          <Item to="cast" state={{ from: backLinkHref }}>
            Cast
          </Item>
        </li>

        <li>
          <Item to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </Item>
        </li>
      </ListAdditional>
    </–°ontainerAdditional>
  );
};

export default Additional;
