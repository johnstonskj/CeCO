# Core

![Core Classes](./core.svg)

<span class="figure caption">Foundation Core</span>

## Classes

### Functional reference

Definition:

> A reference that *uniquely* identifies it's referent. It implies that when
> used as an object property that property should be a subtype of
> `owl:FunctionalProperty`.

OWL:

```turtle
fnd:FunctionalReference a rdfs:Class ;
  rdfs:subClassOf fnd:Reference ;
  skos:prefLabel "Functional reference"@en ;
  skos:definition "..."@en .
```

### Physical thing

Definition:

> A *thing* that has a physical form, it has mass and dimensions.

OWL:

```turtle
fnd:PhysicalThing a rdfs:Class ;
  rdfs:subClassOf fnd:Referent ;
  skos:prefLabel "Physical thing"@en ;
  skos:definition "..."@en .
```

### Reference

Definition:

> A label used to *refer to* a *thing*, distinct from a *thing* itself.
> Reference is `owl:DisjointWith` Referent.

OWL:

```turtle
fnd:Reference a rdfs:Class ;
  rdfs:subClassOf fnd:Thing ;
  owl:disjointWith fnd:Referent ;
  skos:prefLabel "Reference"@en ;
  skos:definition "..."@en .
```

### Referent

Definition:

> An *actual thing* which exists regardless and independent of any particular
> labels used to describe, name, or identify it. It **is** the *thing*.
> Referent is `owl:DisjointWith` Reference.

OWL:

```turtle
fnd:Referent a rdfs:Class ;
  rdfs:subClassOf fnd:Thing ;
  owl:disjointWith fnd:Reference ;
  skos:prefLabel "Referent"@en ;
  skos:definition "..."@en .
```

### Thing

Definition:

> A *thing* is.

OWL:

```turtle
fnd:Thing a rdfs:Class ;
  rdfs:subClassOf owl:Thing ;
  skos:prefLabel "Thing"@en ;
  skos:definition "..."@en .
```

## Properties

### has reference

Definition:

> Denotes that a *referent* has one or more *references*.

OWL:

```turtle
fnd:hasReference a rdfs:Property ;
  owl:inverseOf fnd:refersTo ;
  rdfs:domain fnd:Referent ;
  rdfs:range fnd:Reference ;
  skos:prefLabel "has reference"@en ;
  skos:definition "..."@en .
```

### has unique reference

Definition:

> Denotes the case that a *referent* has a uniquely identifying reference.

OWL:

```turtle
fnd:hasUniqueReference a rdfs:Property ;
  rdfs:subPropertyOf hasReference ;
  owl:inverseOf fnd:uniquelyRefersTo ;
  rdfs:domain fnd:Referent ;
  rdfs:range fnd:FunctionalReference ;
  skos:prefLabel "has unique reference"@en ;
  skos:definition "..."@en .
```

### refers to

Definition:

> Denotes a the *referent* that a *reference* describes.

OWL:

```turtle
fnd:refersTo a rdfs:Property ;
  owl:inverseOf fnd:hasReference ;
  rdfs:domain fnd:Reference ;
  rdfs:range fnd:Referent ;
  skos:prefLabel "refers to"@en ;
  skos:definition "..."@en .
```

### uniquely refers to

Definition:

> Denotes a the *referent* that a *functional reference* uniquely describes.

OWL:

```turtle
fnd:uniquelyRefersTo a owl:FunctionalProperty ;
  rdfs:subPropertyOf fnd:refersTo ;
  owl:inverseOf fnd:hasUniqueReference ;
  rdfs:domain fnd:FunctionalReference ;
  rdfs:range fnd:Referent ;
  skos:prefLabel "uniquely refers to"@en ;
  skos:definition "..."@en .
```
