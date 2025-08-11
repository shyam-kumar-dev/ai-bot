# AI School Chatbot

## Overview

This document provides information about the AI chatbot implemented on the Alpha High School website. The chatbot is designed to answer queries related to school information, including programs, facilities, admissions, faculty, events, and more.

## Features

- **Interactive Chat Interface**: Floating chat button that expands into a full chat interface
- **School Information Database**: Comprehensive information about the school stored in a structured format
- **Natural Language Processing**: Simple pattern matching to understand and respond to user queries
- **Typing Indicators**: Visual feedback when the chatbot is "thinking"
- **Minimizable Interface**: Users can minimize the chat window without closing it
- **Responsive Design**: Works well on both desktop and mobile devices
- **Animated UI Elements**: Smooth animations for better user experience
- **Principal Information**: Detailed information about the school principal
- **Teachers Directory**: Complete list of teachers with their departments and qualifications
- **School Directory**: Contact information for all departments and offices

## Technical Implementation

The chatbot consists of the following components:

1. **ChatBot.tsx**: The main React component that handles the chat interface, user input, and message display
2. **schoolData.ts**: A comprehensive dataset containing all school information
3. **CSS Animations**: Custom animations for the chat interface in index.css

## Customization Guide

### Modifying School Information

To update the school information that the chatbot provides, edit the `schoolData.ts` file located in `src/lib/`. The file contains a structured object with various categories of information:

```typescript
export const schoolInfo = {
  name: 'School Name',
  // Other properties...
  faculty: {
    // Faculty information
    principal: {
      name: 'Principal Name',
      qualification: 'Principal Qualification',
      // Other principal details...
    },
    teachers: [
      {
        name: 'Teacher Name',
        designation: 'Teacher Designation',
        department: 'Department',
        // Other teacher details...
      },
      // More teachers...
    ],
  },
  directory: {
    departments: [
      {
        name: 'Department Name',
        contact: 'department@email.com',
        phone: 'Phone Number',
        // Other department details...
      },
      // More departments...
    ],
    // Other directory information...
  },
};
```

You can modify any of the existing properties or add new ones as needed. The principal information, teachers list, and directory data can be customized to match your school's structure.

### Enhancing Response Generation

The response generation logic is contained in the `generateResponse` function within `ChatBot.tsx`. To improve or modify how the chatbot responds to queries:

1. Locate the `generateResponse` function in `src/components/ui/ChatBot.tsx`
2. Add or modify the pattern matching logic to handle new types of queries
3. Update the response text as needed

Example of adding a new query type:

```typescript
// Add this inside the generateResponse function
if (lowerQuery.match(/(new|pattern|to|match)/)) {
  return `Your custom response here that can include ${schoolInfo.someProperty}`;
}
```

### Styling the Chatbot

The chatbot's appearance can be customized by modifying:

1. **Component Styling**: Edit the className properties in `ChatBot.tsx`
2. **Animations**: Modify the animations in `index.css`
3. **Colors**: Update the color variables in the root CSS variables

## Future Enhancements

Potential improvements for the chatbot include:

1. **Integration with a Real NLP Service**: Connect to OpenAI, Google Dialogflow, or other NLP services for more sophisticated understanding
2. **User Authentication**: Allow the chatbot to provide personalized information for logged-in users
3. **Conversation History**: Store conversation history for returning users
4. **Feedback Mechanism**: Add buttons for users to rate the helpfulness of responses
5. **Rich Media Responses**: Include images, links, and formatted content in responses
6. **Voice Input/Output**: Add speech recognition and text-to-speech capabilities
7. **Staff Photos**: Add profile photos for the principal and teachers
8. **Interactive Directory**: Create an interactive school map showing department locations
9. **Appointment Booking**: Allow users to schedule appointments with the principal or specific departments
10. **Live Chat Handoff**: Enable transition from AI chat to live chat with staff members when needed
11. **Multi-language Support**: Add support for multiple languages to serve diverse communities

## Troubleshooting

If you encounter issues with the chatbot:

1. **Chatbot Not Appearing**: Check that `ChatBot` component is properly imported and included in the `Layout.tsx` file
2. **Styling Issues**: Verify that all required CSS classes are defined in `index.css`
3. **Response Problems**: Check the pattern matching in `generateResponse` function and ensure the school data is correctly formatted

## Support

For additional help or customization, please contact the development team.