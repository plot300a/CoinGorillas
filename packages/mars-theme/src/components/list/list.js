import React from "react";
import { connect, styled } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
/*import "./list.css"; */

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <Container>
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header className="borderbox">
          {data.taxonomy}: {state.source[data.taxonomy][data.id].name}
        </Header>
      )}

      {/* If the list is an author, we render a title. */}
      {data.isAuthor && (
        <Header className="borderbox">
          Author: {state.source.author[data.id].name}
        </Header>
      )}

      <VideolistWrapper>
        {/* Iterate over the items of the list. */}
        {data.items.map(({ type, id }) => {
          const item = state.source[type][id];
          // Render one Item component for each one.
          return (
            <Singleitembox>
              <Item key={item.id} item={item} />
            </Singleitembox>
          );
        })}
      </VideolistWrapper>
      <Cleardiv />
      <Pagination />
    </Container>
  );
};

export default connect(List);

const Container = styled.section`
  width: 99%;
  height: auto;
  margin: 0;
  padding-left: 5px;
  list-style: none;
  border-width: 0px;
  border-color: dotted;
  border-style: solid;
`;

const VideolistWrapper = styled.section`
  width: 99%;
  height: auto;
  margin: 0;
  padding-left: 0px;
  list-style: none;
  border-width: 0; /*0.5px; */
  border-color: white;
  border-style: dotted;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-content: space-between;

  a: {
    color: #a7f7a7;
  }
`;

const Singleitembox = styled.section`
  width: 255px;
  min-height: 240px;
  max-height: 240px;
  padding: 1px 0px 0px 0px;
  /* display: flex;
  flex-direction: column; */
  margin-right: 7px;
  margin-bottom: 7px;
  border-width: 0px;
  border-color: grey;
  border-style: solid;
  align-content: center;
`;

const Cleardiv = styled.section`
  clear: both;
`;
const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
