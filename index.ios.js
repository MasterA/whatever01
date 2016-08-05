class whatever01 extends React.component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initRoute={{
          title: 'FBLogin',
          component: FBlogin.js,
        }}
       />
    );
  }
}

var styles = React.Stylesheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  constainer: {
    flex: 1
  }
});
