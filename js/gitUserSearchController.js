githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {
  var searchResult;
  var searchTerm;
  var self = this;
  var access_token = gitAccessToken;
  var searchResource = $resource('https://api.github.com/search/users');

  self.doSearch = function() {
    self.searchResult = searchResource.get(
      { q: self.searchTerm, access_token: gitAccessToken }
    );
  };

}]);
