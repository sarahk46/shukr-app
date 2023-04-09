import React, { useState, useEffect } from 'react';
import { ListItem, Divider } from '@rneui/themed';
import styles from '../styles'; // Need to eventually do some styling
import HadithCard from './HadithCard';

// TODO: Before release, would also have to accept
// data related to each entry in order to display correct info
function EntryItem({ title, hadith }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <ListItem.Accordion
      content={
        <>
          <ListItem.Content>
            <ListItem.Title>{title}</ListItem.Title>
          </ListItem.Content>
        </>
      }
      isExpanded={expanded}
      onPress={() => {
        setExpanded(!expanded);
      }}
      bottomDivider
    >
      <ListItem>
        {/* This is where we would want to pass in hadith variable into HadithCard*/}
        <ListItem.Content>
          <HadithCard isHomeCard={false} />
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>How would you describe this hadith to someone else?</ListItem.Title>
          <ListItem.Subtitle>Question 1 Answer</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>How does this hadith relate to your past and present?</ListItem.Title>
          <ListItem.Subtitle>Question 2 Answer</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>How can you implement this hadith in your future?</ListItem.Title>
          <ListItem.Subtitle>Question 3 Answer</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </ListItem.Accordion>
  );
}
export default EntryItem;
