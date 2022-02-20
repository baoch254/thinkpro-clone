# Think Pro - Clone

## How to name function - From Stackoverflow

- getFoo() - the caller expects that foo exists, and if not, it throws. Mostly, it has some kind of ID as param.
  Example: getProductByCodeName("BTTF")
- findFoos() - the caller expects that foo may not exist, in which case the methods returns null. Parameters are typically some "foreign keys" - ids to other objects, or enum values.
  Example: findCarModelsMadeBy(CarMaker.FORD)

- listFoos() - provides a list of foos, or empty list if none are present. Typically, gives items that are already prepared (eagerly loaded), and may return an Iterator, Stream, Sequence, etc.
  Example: invoice.listItems()

- searchFoos() or queryFoos() - does some kind of active search by given values. May also search by vague criteria like patterns, search queries etc.
  Example: searchBooks(QueryBuilder.withTopicKeywords("japan middle age anjin"))

- lookupFoo() - typically calls a remote service to get some information by an ID. Comes from the conventions of JavaEE.
  Example: bankInfoService.lookupBankInfo("NL12")

- provideFoos() - typical for some kind of repositories which do not change too often and is not supposed to be called too often, like, a provider of implementations of some interface, called during application boot.
  Example: ProductConfigProvider.provideProductConfigs()

- loadFoos() - inditaces that getting the operation may involve costly I/O (disk access, database roundtrip, web service call).
  Example: s3archive.loadFilesFromDay(LocalDate.now())

- try\*Foos() - explicitly indicates that it will handle errors / exceptions, either by returning null, empty list, or a predefined wrapping exception. Often used as a util method to wrap a method unconveniently throwing if it does not find.
