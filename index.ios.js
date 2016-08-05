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
