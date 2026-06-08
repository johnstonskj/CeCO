# Structural Aspects

![Structural Aspect Classes](./structural-aspects.svg)

<span class="figure caption">Structural Aspects</span>

## Classes

### Aggregate

Definition:

> An aggregate thing is one where at least some of the parts of the whole remain
> somewhat distinct and removable from it.

Example:

1. A Car is an aggregate where components like wheels and engine can be removed
   and replaced.

OWL:

```turtle
fnd:Aggregate a owl:Class ;
  rdfs:subClassOf fnd:StructuredThing ;
  owl:disjointWith fnd:Composite;
  skos:prefLabel "Aggregate"@en ;
  skos:definition "..."@en ;
  skos:example "..." .
```

### Atomic

Definition:

> An atomic thing has no parts that from which it was made, or into which it may
> be decomposed. Atomic things are disjoint with structured things.

OWL:

```turtle
fnd:Atomic a owl:Class ;
  rdfs:subClassOf fnd:PhysicalThing ;
  owl:disjointWith StructuredThing ;
  skos:prefLabel "Atomic"@en ;
  skos:definition "..."@en .
```

### Composite

Definition:

> A composite thing is one where the parts, once included in the whole no longer
> have any distinction from the whole and may not be *meaningfully* removed from
> it.

Example:

1. An omelette is a composite, you cannot reconstitute the egg used as a *part*.

OWL:

```turtle
fnd:Composite a owl:Class ;
  rdfs:subClassOf fnd:StructuredThing ;
  owl:disjointWith fnd:Aggregate ;
  skos:prefLabel "Composite"@en ;
  skos:definition "..."@en .
```

### Dependent thing

Definition:

> A thing whose existence depends on the existence of some other thing.

OWL:

```turtle
fnd:DependentThing a owl:Class ;
  rdfs:subClassOf fnd:Thing ;
  owl:disjointWith fnd:IndependentThing ;
  skos:prefLabel "Dependent thing"@en ;
  skos:definition ""@en .
```

### Independent thing

Definition:

> A thing whose existence is not dependent on the existence of some other
> thing.

OWL:

```turtle
fnd:IndependentThing a owl:Class ;
  rdfs:subClassOf fnd:Thing ;
  owl:disjointWith fnd:DependentThing ;
  skos:prefLabel "Independent thing"@en ;
  skos:definition "..."@en .
```

### Part

Definition:

> Some *thing* which acts as a component of a *structured thing*.

OWL:

```turtle
fnd:Part a owl:Class ;
  rdfs:subClassOf fnd:Thing ;
  skos:prefLabel "Part"@en ;
  skos:definition "..."@en .
```

### Physical thing

Definition:

> A *thing* that has a physical form, it has mass and dimensions.

OWL:

```turtle
fnd:PhysicalThing a owl:Class ;
  rdfs:subClassOf fnd:Referent ;
  skos:prefLabel "Physical thing"@en ;
  skos:definition ""@en .
```

### Structured thing

Definition:

> A thing that has some form of internal structure, it has parts whether it
> is a *composite* or *aggregate* thing.

OWL:

```turtle
fnd:StructuredThing a owl:Class ;
  rdfs:subClassOf fnd:PhysicalThing ;
  owl:disjointWith fnd:Atomic ;
  skos:prefLabel "Structured thing"@en ;
  skos:definition ""@en .
```
