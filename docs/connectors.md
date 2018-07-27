# Connectors

Connectors are implementations of methods that are used to gather data by the
application.

## Available

Right now, there are 2 connectors available for use, REST and File.

## Template

```javascript
export const getDocument = (path) => {
  return new Promise((resolve) => {
    resolve([
      {
        source: {
          content: "# Lorem ipsum \n ..."
        }
      }
    ])
  });
};

export const getProjects = () => {
  return new Promise((resolve) => {
    resolve([
      {
        source: {
          configuration: {...},
          contacts: {...},
          documentation: {...},
          extra: {...},
          globalInfos: {...},
          statusInfos: {...},
          url: {...}
        }
      }
    ])
  })
};
export const getProject = (path) => {}; // Useless right now
export const search = (content) => {}; // Not documented yet
```