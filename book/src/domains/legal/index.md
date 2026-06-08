# Domain: Legal

## View: Identity

![Identity](./legal-identity.svg)

<span class="figure caption">Identity</span>

## View: Contracts

![Contracts](./legal-contracts.svg)

<span class="figure caption">Contracts</span>

## Views: Entities

![Entities](./legal-entities.svg)

<span class="figure caption">Legal Entities</span>

## Views: Business Entities

The concepts shown here as sub-classes of `Business Entity` are reasonably
complete but not elaborated as a part of the ontology at this time as they
have not yet been necessary.

![Business Entities](./legal-business-entities.svg)

<span class="figure caption">Business Entities</span>

## Views: Governmental Entities

The concepts shown here as sub-classes of `Governmental Entity` are reasonably
complete but not elaborated as a part of the ontology at this time as they
have not yet been necessary.

![Governmental Entities](./legal-government-entities.svg)

<span class="figure caption">Governmental Entities</span>

## Example

![Example Entities](./legal-entities-example.svg)

<span class="figure caption">Legal Entity Example</span>

## Classes

### Business entity

Definition:

> ...

OWL:

```turtle
:BusinessEntity a owl:Class ;
  rdfs:subClassOf :JuridicalPerson ;
  skos:prefLabel "Business entity"@en ;
  skos:definition "..."@en .
```

### Claim

Definition:

> ...

OWL:

```turtle
:Claim a owl:Class ;
  rdfs:subClassOf fnd:Outcome ;
  skos:prefLabel "Claim"@en ;
  skos:definition "..."@en .
```

### Consideration

Definition:

> ...

OWL:

```turtle
:Consideration a owl:Class ;
  rdfs:subClassOf fnd:Thing ;
  skos:prefLabel "Consideration"@en ;
  skos:definition "..."@en .
```

### Contract

Definition:

> ...

OWL:

```turtle
:Contract a owl:Class ;
  rdfs:subClassOf fnd:Agreement ;
  skos:prefLabel "Contract"@en ;
  skos:definition "..."@en .
```

### Entity group

Definition:

> ...

OWL:

```turtle
:EntityGroup a owl:Class ;
  rdfs:subClassOf fnd:DependentThing ;
  skos:prefLabel "Entity group"@en ;
  skos:definition "..."@en .
```

### Formal organization

Definition:

> ...

OWL:

```turtle
:FormalOrganization a owl:Class ;
  rdfs:subClassOf :HierarchicalEntityGroup ;
  skos:prefLabel "Formal organization"@en ;
  skos:definition "..."@en .
```

### Governmental entity

Definition:

> ...

OWL:

```turtle
:GovernmentalEntity a owl:Class ;
  rdfs:subClassOf :JuridicalPerson ;
  skos:prefLabel "Governmental entity"@en ;
  skos:definition "..."@en .
```

### Hierarchical entity group

Definition:

> ...

OWL:

```turtle
:HierarchicalEntityGroup a owl:Class ;
  rdfs:subClassOf :EntityGroup ;
  skos:prefLabel "Hierarchical entity group"@en ;
  skos:definition "..."@en .
```

### Identity claim

Definition:

> ...

OWL:

```turtle
:IdentityClaim a owl:Class ;
  rdfs:subClassOf :LegalDocument ;
  skos:prefLabel "Identity claim"@en ;
  skos:definition "..."@en .
```

### Juridical person

Definition:

> ...

OWL:

```turtle
:JuridicalPerson a owl:Class ;
  rdfs:subClassOf :LegalEntity ;
  skos:prefLabel "Juridical person"@en ;
  skos:definition "..."@en .
```

### Jurisdiction

Definition:

> ...

OWL:

```turtle
:Jurisdiction a owl:Class ;
  rdfs:subClassOf fnd:SpatialRegion ;
  skos:prefLabel "Jurisdiction"@en ;
  skos:definition "..."@en .
```

### Legal document

Definition:

> ...

OWL:

```turtle
:LegalDocument a owl:Class ;
  rdfs:subClassOf fnd:Document ;
  skos:prefLabel "Legal document"@en ;
  skos:definition "..."@en .
```

### Legal entity

Definition:

> ...

OWL:

```turtle
:LegalEntity a owl:Class ;
  rdfs:subClassOf fnd:Referent ;
  skos:prefLabel "Legal entity"@en ;
  skos:definition "..."@en .
```

### Legal identification scheme

Definition:

> ...

OWL:

```turtle
:LegalIdentificationScheme a owl:Class ;
  rdfs:subClassOf fnd:IdentificationScheme ;
  skos:prefLabel "Legal identification scheme"@en ;
  skos:definition "..."@en .
```

### Legal identifier

Definition:

> ...

OWL:

```turtle
:LegalIdentifier a owl:Class ;
  rdfs:subClassOf fnd:ThIdentifiering ;
  skos:prefLabel "Legal identifier"@en ;
  skos:definition "..."@en .
```

### Natural person

Definition:

> ...

OWL:

```turtle
:NaturalPerson a owl:Class ;
  rdfs:subClassOf :LegalEntity ;
  skos:prefLabel "Natural person"@en ;
  skos:definition "..."@en .
```

### Obligation

Definition:

> ...

OWL:

```turtle
:Obligation a owl:Class ;
  rdfs:subClassOf fnd:Outcome ;
  skos:prefLabel "Obligation"@en ;
  skos:definition "..."@en .
```

### Sub contract

Definition:

> ...

OWL:

```turtle
:SubContract a owl:Class ;
  rdfs:subClassOf :Contract ;
  skos:prefLabel "Sub contract"@en ;
  skos:definition "..."@en .
```

### Surviving obligation

Definition:

> ...

OWL:

```turtle
:SurvivingObligation a owl:Class ;
  rdfs:subClassOf :Obligation ;
  skos:prefLabel "Surviving obligation"@en ;
  skos:definition "..."@en .
```

## Properties

### assertion artifact

Definition:

> ...

```turtle
:assertionArtifact a owl:ObjectProperty ;
  rdfs:domain :IdentityClaim ;
  rdfs:range :LegalDocument ;
  skos:prefLabel "assertion artifact"@en ;
  skos:definition "..."@en .
```

### assertion claim

Definition:

> ...

```turtle
:assertionClaim a owl:ObjectProperty ;
  rdfs:domain :LegalEntity ;
  rdfs:range :IdentityClaim ;
  skos:prefLabel "assertion claim"@en ;
  skos:definition "..."@en .
```

### assertion legal identifier

Definition:

> ...

```turtle
:assertionLegalIdentifier a owl:ObjectProperty ;
  rdfs:domain :IdentityClaim ;
  rdfs:range :LegalIdentifier ;
  skos:prefLabel "assertion legal identifier"@en ;
  skos:definition "..."@en .
```

### assertion validity span

Definition:

> ...

```turtle
:assertionValiditySpan a owl:ObjectProperty ;
  rdfs:domain :IdentityClaim ;
  rdfs:range fnd:TemporalSpan ;
  skos:prefLabel "assertion validity span"@en ;
  skos:definition "..."@en .
```

### contractually constructs

Definition:

> ...

```turtle
:contractuallyConstructs a owl:ObjectProperty ;
  rdfs:domain :Thing ;
  rdfs:range fnd:Thing ; # Claim OR Obligation
  skos:prefLabel "contractually constructs"@en ;
  skos:definition "..."@en .
```

### contractually entails

Definition:

> ...

```turtle
:contractuallyEntails a owl:ObjectProperty ;
  rdfs:domain :Contract ;
  rdfs:range :Consideration ; 
  skos:prefLabel "contractually entails"@en ;
  skos:definition "..."@en .
```

### hasJurisdiction

Definition:

> ...

```turtle
:hasJurisdiction a owl:ObjectProperty ;
  rdfs:domain :GovernmentalEntity ;
  rdfs:range :Jurisdiction ;
  skos:prefLabel "has jurisdiction"@en ;
  skos:definition "..."@en .
```

### has member

Definition:

> ...

```turtle
:hasMember a owl:ObjectProperty ;
  rdfs:domain :EntityGroup ;
  rdfs:range :LegalEntity ;
  skos:prefLabel "has member"@en ;
  skos:definition "..."@en .
```

### has organization

Definition:

> ...

```turtle
:hasOrganization a owl:ObjectProperty ;
  rdfs:domain fnd:Thing ; # BusinessEntity OR GovernmentalEntity
  rdfs:range :FormalOrganization ;
  skos:prefLabel "has organization"@en ;
  skos:definition "..."@en .
```

### has sub contract

Definition:

> ...

```turtle
:hasSubContract a owl:ObjectProperty ;
  rdfs:domain :Contract ;
  rdfs:range :SubContract ;
  skos:prefLabel "has sub contract"@en ;
  skos:definition "..."@en .
```

### is contained within group

Definition:

> ...

```turtle
:isContainedWithinGroup a owl:ObjectProperty ;
  rdfs:domain :HierarchicalEntityGroup ;
  rdfs:range :EntityGroup ;
  skos:prefLabel "is contained within group"@en ;
  skos:definition "..."@en .
```

### is legally owned by

Definition:

> ...

```turtle
:isLegallyOwnedBy a owl:ObjectProperty ;
  rdfs:domain fnd:Thing ;
  rdfs:range :LegalEntity ;
  skos:prefLabel "is legally owned by"@en ;
  skos:definition "..."@en .
```

### is legal owner

Definition:

> ...

```turtle
:isLegalOwner a owl:ObjectProperty ;
  rdfs:domain :LegalEntity ;
  rdfs:range fnd:Thing ;
  skos:prefLabel "is legal owner"@en ;
  skos:definition "..."@en .
```

### is member of group

Definition:

> ...

```turtle
:isMemberOfGroup a owl:ObjectProperty ;
  rdfs:domain :EntityGroup ;
  rdfs:range :LegalEntity ;
  skos:prefLabel "is member of group"@en ;
  skos:definition "..."@en .
```

### issuing authority

Definition:

> ...

```turtle
:issuingAuthority a owl:ObjectProperty ;
  rdfs:domain :LegalIdentificationScheme ;
  rdfs:range :Legalentity ; # LegalEntity AND Party
  skos:prefLabel "issuing authority"@en ;
  skos:definition "..."@en .
```

### jurisdictional region

Definition:

> ...

```turtle
:jurisdictionalRegion a owl:ObjectProperty ;
  rdfs:domain :Jurisdiction ;
  rdfs:range fnd:SpatialRegion ;
  skos:prefLabel "jurisdictional region"@en ;
  skos:definition "..."@en .
```

### contains entity group

Definition:

> ...

```turtle
:containsEntityGroup a owl:ObjectProperty ;
  rdfs:domain :HierarchicalEntityGroup ;
  rdfs:range :Thing ; # HierarchicalEntityGroup or EntityGroup
  skos:prefLabel "contains entity group"@en ;
  skos:definition "..."@en .
```

### promisee

Definition:

> ...

```turtle
:promisee a owl:ObjectProperty ;
  rdfs:domain :Claim ;
  rdfs:range fnd:Party ;
  skos:prefLabel "promisee"@en ;
  skos:definition "..."@en .
```

### promisor

Definition:

> ...

```turtle
:promisor a owl:ObjectProperty ;
  rdfs:domain :Obligation ;
  rdfs:range fnd:Party ;
  skos:prefLabel "promisor"@en ;
  skos:definition "..."@en .
```
