# Tools and Methods

To manage the size of this exercise we organize the content along two distinct
and orthogonal axis; one is purely hierarchical allowing a breakdown into
managable sized scopes, the other is a refinement across abstraction layers.

## Organizational Dimensions

The organizational dimension separates the entire ontology into a set of
*domains*, and each domain into a set of *views*.

### Domains

A domain is best described as the set of concepts and entities necessarily
described to understand one or more processes in an area of the business.
As such the domain is often named for this area of the business or for one
of these processes.

### Views

A view is then centered on one or more of the entities within the domain and
provides a specific slice of the overall model.

See [Domains and Views](./organization.md).

## Semantic Dimensions

The semantic, or abstraction, dimension simply separates one high-level view
described using *semantic maps* (images) from our detailed *formal ontology*
representations in RDF and OWL.

### Concept Maps

 The images are semantic maps using
[Cmap Tools](https://cmap.ihmc.us) suite, and provide a useful high-level way
to capture the concepts used in our ontologies. The tools are light-weight and
so are powerful for use in workshop environments capturing ideas in fast paced
back and forth exchanges.

See [Conceptual: CmapTools](./cmaptools.md).

### OWL Ontologies (Protégé)

The formal text is [Turtle](https://www.w3.org/TR/turtle/) a serialization of
the [RDF](https://www.w3.org/TR/rdf11-concepts/),
[RDF Schema](https://www.w3.org/TR/rdf11-schema/) and
[OWL](https://www.w3.org/TR/owl2-overview/) semantic web standards commonly
used in the development of knowledge graphs and ontologies.

For the development of the OWL ontologies we use the excellent
[Protégé](https://protege.stanford.edu) tool.

See [Detailed: Protégé and OWL](./protege.md) and [OWL Guidelines](./owl_guidelines.md).

## On Naming

The following is basic naming guidance *unless* there are known/expected names
that practitioners in the domain would expect to see.

### Ontologies

1. Class Names: `UpperCamelCase`
2. Labels: `Upper Camel Case`

```turtle
ex:FoundationalThings a owl:Ontology ;
  skos:prefLabel "Foundational Things" .
```

### Classes

1. Class Names: `UpperCamelCase`
2. Labels: `Sentence cased`

```turtle
ex:FoundationalThing a rdfs:Class ;
  skos:prefLabel "Foundational thing" .
```

### Properties

1. Property Names: `lowerCamelCase`
2. Labels: `all lower case`

```turtle
ex:foundationalRelation a rdfs:Property ;
  skos:prefLabel "foundational relation" .
```
