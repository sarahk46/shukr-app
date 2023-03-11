import React, { useState, useEffect } from 'react';
import { ListItem } from '@rneui/themed';
import styles from './styles';


function EntryItem({title, hadith}) {
    const [expanded, setExpanded] = useState(false);
    return (
        <ListItem.Accordion
          content= {
            <ListItem.Content>
                <ListItem.Title>{title}</ListItem.Title>
              </ListItem.Content>
          }
          isExpanded={expanded}
          onPress={() => {
            setExpanded(!expanded);
          }}
        >
        <ListItem>
            <ListItem.Content>
              <ListItem.Title>{hadith}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>Question 1 Info</ListItem.Title>
              <ListItem.Subtitle>Question 1 Answer</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>Question 2 Info</ListItem.Title>
              <ListItem.Subtitle>Question 2 Answer</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>Question 3 Info</ListItem.Title>
              <ListItem.Subtitle>Question 3 Answer</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </ListItem.Accordion>
    );
  }
  export default EntryItem;