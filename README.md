# Zeineb Romthana — AI Engineer

> Building production AI systems that solve real problems. From local LLM optimization to multi-agent platforms scaling on-premises.

---

## What I Do

I design and build **production-grade AI systems** that bridge the gap between research and reality. My focus: **RAG pipelines**, **agentic architectures**, and **cost-efficient LLM deployment**.

Recent work includes:
- **Multi-agent orchestration** for DevOps, FinOps, and Infrastructure-as-Code automation
- **On-premises LLM infrastructure** migration (vLLM, A100 GPUs, OCI cost optimization)
- **Production RAG systems** with semantic retrieval, reranking, and confidence-based routing
- **Observability & billing** layers for token attribution and cost tracking

## Why This Matters

I care about **systems that actually work in production**. Not research papers. Not proofs-of-concept. Real systems handling:
- Complex multi-turn agent workflows
- Confidence-based fallback mechanisms
- Cost control at scale
- Reliable observability from token-level to user-level metrics

---

## Recent Experience

**AI Engineer** | Looyas (December 2025 – Present)
- Architecting agentic AI systems combining LLMs, RAG, and structured data
- Deploying secure local retrieval to minimize external API dependencies
- Integrating AI agents with cloud platforms (OCI, GCP) for operational use

**Generative AI & NLP Engineer** | Focus Corporation (February – July 2025)
- Built hybrid NLP pipelines: fine-tuned DistilBERT + LLM fallback + semantic retrieval
- Orchestrated multi-agent workflows with LangChain/LangGraph
- Deployed production APIs and web interfaces for end-to-end systems

**NLP Engineer** | Sportify AI (July – October 2024)
- Fine-tuned Mistral-7B (QLoRA) on domain-specific data
- Designed RAG chatbot with LangChain + FAISS semantic search
- Evaluated generation quality and retrieval performance

**Computer Vision Engineer** | Proosoft Cloud (February – May 2024)
- Built CV pipeline (OpenCV) for real-time employee detection
- Integrated results with PostgreSQL + Dash monitoring dashboards
- Scaled to 100+ concurrent users with reliable performance

---

## What I've Built

### Multi-Agent AI Platform
Orchestrator-based architecture routing knowledge queries to a shared RAG system and actions to specialized agents. Features LangGraph state management, ~19K document chunks, and production error handling.
- **Tech**: LangGraph, Python, FastAPI, Qdrant
- **Result**: Unified control plane for 5 specialized agents

### Production RAG Pipeline
Semantic retrieval system powering DevOps agent with Qdrant, bge-base embeddings, cross-encoder reranking, and Llama 3.3 70B integration. ~349K document chunks with confidence-based routing.
- **Tech**: Qdrant, BAAI embeddings, LLMs, Langfuse
- **Result**: 82%+ retrieval precision at scale

### On-Premises LLM Strategy
Hardware sizing, quantization analysis (BF16 vs INT8), cost ROI modeling for A100-based inference. Detailed comparison of OCI vs AWS pricing for GPU shapes.
- **Tech**: vLLM, A100 optimization, GPU planning
- **Result**: 18–24 month breakeven analysis for 10K+ monthly tokens

### Observability & Billing Layer
Integrated Langfuse v3 for multi-tenant tracing, Prometheus/Grafana for agent convergence metrics, and LiteLLM for token cost attribution. Tavily credit accounting.
- **Tech**: Langfuse, Prometheus, LiteLLM
- **Result**: Token-level cost visibility across 5 agents

### Fraud Detection System
End-to-end ML pipeline: preprocessing, XGBoost modeling, evaluation, REST API deployment, and visualization dashboard.
- **Tech**: XGBoost, Python, FastAPI, Dash
- **Result**: Deployed fraud detection system with 100+ user dashboards

### Protein Graph Construction
Processed 1M+ protein records with PySpark, built similarity graphs in Neo4j, and applied graph algorithms for relationship scoring.
- **Tech**: PySpark, Neo4j, Python
- **Result**: Functional prediction at scale

---

## Technical Stack

**Languages & Core**  
Python • SQL • PySpark

**AI/ML & LLMs**  
LLM Integration • RAG • Semantic Search • Agents • LangChain • LangGraph  
Fine-Tuning (DistilBERT, Mistral QLoRA) • Transformers • Prompt Engineering

**Retrieval & Vectors**  
FAISS • Qdrant • Embeddings (BAAI bge) • Vector Indexing

**Agentic Systems**  
Multi-Agent Workflows • Tool-Calling • ReAct Patterns • LangGraph State

**Data & Storage**  
PostgreSQL • MongoDB • Neo4j • Vector Databases

**Cloud & Infrastructure**  
OCI • GCP • AWS • Docker • Kubernetes (foundational) • Terraform (foundational)

**Inference & Optimization**  
vLLM • GPU Optimization • Model Serving • FastAPI

**Observability**  
Langfuse • Prometheus • Grafana

**Other**  
Git • Linux • Bash • REST APIs • Streamlit • Dash

---

## Education

**Master of Science in Data Science**  
Higher Institute of Technological Studies of Bizerte, Tunisia

Advanced Statistics • Deep Learning • Generative AI • MLOps • Neural Networks

**Bachelor of Science in Electrical Engineering**  
Higher Institute of Technological Studies of Bizerte, Tunisia

Industrial Automation • Embedded Systems • Robotics • ML Fundamentals

---

## Currently Focused On

🏗️ **On-Premises LLM Scaling** — Optimizing inference latency and cost for multi-agent production deployments

📊 **Observability & Metrics** — Building comprehensive token tracking, agent convergence analysis, and cost attribution

🔄 **RAG Quality** — Improving retrieval precision through data curation, reranking strategies, and confidence-based routing

---

## Leadership & Community

**Membership Support Manager** | AIESEC (February 2020 – February 2024)
- Onboarded 30+ new members and organized 7+ engagement events
- Improved retention through mentorship and training programs

**Marketing & Media Assistant** | IEEE Student Branch (September 2020 – September 2021)
- Created 10+ digital campaigns increasing audience engagement 20%

---

## Let's Connect

**Email**: [zeinebromthana@gmail.com](mailto:zeinebromthana@gmail.com)  
**GitHub**: [github.com/zeineb61romthana](https://github.com/zeineb61romthana)  
**LinkedIn**: [linkedin.com/in/zeineb-romthana](https://www.linkedin.com/in/zeineb-romthana-81a8b1200/)  
**Phone**: +216 96 278 907

---

## Philosophy

I believe in **brutally honest technical assessments** over hype. I build systems that work—not prototypes that impress in demos. My approach: minimal, production-grade, cost-conscious, and measurable.

If you're building AI systems that need to **actually work at scale**, let's talk.
