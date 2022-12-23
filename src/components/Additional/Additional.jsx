import {
  СontainerAdditional,
  TitleAdditional,
  ListAdditional,
  Item,
} from './Additional.styled';

const Additional = ({ backLinkHref }) => {
  return (
    <СontainerAdditional>
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
    </СontainerAdditional>
  );
};

export default Additional;
