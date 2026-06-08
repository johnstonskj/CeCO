# Domain: Offers

![Offers Overview](./offers.svg)

<span class="figure caption">Offers Overview</span>

## View: Offer Availability

![Offer Availability](./offers-availability.svg)

## View: Offer Eligibility

<span class="figure caption">Offer Availability</span>

![Offer Eligibility](./offers-eligibility.svg)

<span class="figure caption">Offer Eligibility</span>

## View: Offer Parties

![Offer Parties](./offer-parties.svg)

<span class="figure caption">Offer Parties</span>

## Classes

### Age restriction eligibility

Definition:

> ...

OWL:

```turtle
:AgeRestrictionEligibility a owl:Class ;
  rdfs:subClassOf :Eligibility ;
  skos:prefLabel "Age restriction eligibility"@en ;
  skos:definition "..."@en .
```

### Artist

Definition:

> ...

OWL:

```turtle
:Artist a owl:Class ;
  rdfs:subClassOf fnd:Party, lgl:LegalEntity ;
  skos:prefLabel "Artist"@en ;
  skos:definition "..."@en .
```

### Brand owner

Definition:

> ...

OWL:

```turtle
:BrandOwner a owl:Class ;
  rdfs:subClassOf fnd:Party, lgl:LegalEntity ;
  skos:prefLabel "Brand owner"@en ;
  skos:definition "..."@en .
```

### Constraint

Definition:

> ...

OWL:

```turtle
:Constraint a owl:Class ;
  rdfs:subClassOf fnd:Thing ;
  skos:prefLabel "Constraint"@en ;
  skos:definition "..."@en .
```

### Customer class eligibility

Definition:

> ...

OWL:

```turtle
:CustomerClassEligibility a owl:Class ;
  rdfs:subClassOf :Eligibility ;
  skos:prefLabel "Customer class eligibility"@en ;
  skos:definition "..."@en .
```

### Distributer

Definition:

> ...

OWL:

```turtle
fnd:Distributer a owl:Class ;
  rdfs:subClassOf fnd:Party, lgl:LegalEntity ;
  skos:prefLabel "Distributer"@en ;
  skos:definition "..."@en .
```

### Eligibility

Definition:

> ...

OWL:

```turtle
:Eligibility a owl:Class ;
  rdfs:subClassOf :Constraint ;
  skos:prefLabel "Eligibility"@en ;
  skos:definition "..."@en .
```

### Offer

Definition:

> ...

OWL:

```turtle
:Offer a owl:Class ;
  rdfs:subClassOf lgl:Consideration ;
  skos:prefLabel "Offer"@en ;
  skos:definition "..."@en .
```

### Seller

Definition:

> ...

OWL:

```turtle
:Seller a owl:Class ;
  rdfs:subClassOf fnd:Party, lgl:LegalEntity ;
  skos:prefLabel "Seller"@en ;
  skos:definition "..."@en .
```

### Service provider

Definition:

> ...

OWL:

```turtle
:ServiceProvider a owl:Class ;
  rdfs:subClassOf fnd:Party, lgl:LegalEntity ;
  skos:prefLabel "Service provider"@en ;
  skos:definition "..."@en .
```

### Spatial eligibility

Definition:

> ...

OWL:

```turtle
:SpatialEligibility a owl:Class ;
  rdfs:subClassOf :Eligibility ;
  skos:prefLabel "Spatial eligibility"@en ;
  skos:definition "..."@en .
```

### Temporal eligibility

Definition:

> ...

OWL:

```turtle
:TemporalEligibility a owl:Class ;
  rdfs:subClassOf :Eligibility ;
  skos:prefLabel "Temporal eligibility"@en ;
  skos:definition "..."@en .
```

### Term

Definition:

> ...

OWL:

```turtle
:Term a owl:Class ;
  rdfs:subClassOf fnd:Condition ;
  skos:prefLabel "Term"@en ;
  skos:definition "..."@en .
```

## Properties

### eligible in location

Definition:

> ...

```turtle
:eligibleInLocation a owl:ObjectProperty ;
  rdfs:domain :TemporalEligibility ;
  rdfs:range fnd:TemporalSpan ;
  skos:prefLabel "eligible in location"@en ;
  skos:definition "..."@en .
```

### eligible in time

Definition:

> ...

```turtle
:eligibleInTime a owl:ObjectProperty ;
  rdfs:domain :SpatialEligibility ;
  rdfs:range fnd:SpatialReference ;
  skos:prefLabel "eligible in time"@en ;
  skos:definition "..."@en .
```

### has eligibility constraints

Definition:

> ...

```turtle
:hasEligibilityConstraints a owl:ObjectProperty ;
  rdfs:domain :Offer ;
  rdfs:range :Eligibility ;
  skos:prefLabel "has eligibility constraints"@en ;
  skos:definition "..."@en .
```

### seller of record

Definition:

> ...

```turtle
:sellerOfRecord a owl:ObjectProperty ;
  rdfs:domain :Offer ;
  rdfs:range :Seller ;
  skos:prefLabel "seller of record"@en ;
  skos:definition "..."@en .
```

### terms of sale

Definition:

> ...

```turtle
:termsOfSale a owl:ObjectProperty ;
  rdfs:domain :Offer ;
  rdfs:range :Term ;
  skos:prefLabel "terms of sale"@en ;
  skos:definition "..."@en .
```

### to sell

Definition:

> ...

```turtle
fnd:toSell a owl:ObjectProperty ;
  rdfs:domain :Offer ;
  rdfs:range :Item ;
  skos:prefLabel "to sell"@en ;
  skos:definition "..."@en .
```
